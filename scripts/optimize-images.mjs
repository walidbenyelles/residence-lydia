
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'

const imagesDirectory = path.resolve('public/images')

let optimizedCount = 0
let originalBytes = 0
let optimizedBytes = 0

async function optimizeDirectory(directory) {
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  })

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      await optimizeDirectory(fullPath)
      continue
    }

    if (!/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      continue
    }

    const outputPath = fullPath.replace(
      /\.(jpg|jpeg|png)$/i,
      '.webp'
    )

    const originalStats = await fs.stat(fullPath)

    // Évite de convertir une image déjà optimisée
    try {
      await fs.access(outputPath)
      console.log(`Déjà optimisée : ${entry.name}`)
      continue
    } catch {
      // Le fichier WebP n'existe pas encore
    }

    try {
      await sharp(fullPath)
        .rotate()
        .resize({
          width: 1920,
          withoutEnlargement: true,
        })
        .webp({
          quality: 82,
          effort: 6,
        })
        .toFile(outputPath)

      const optimizedStats = await fs.stat(outputPath)

      optimizedCount++
      originalBytes += originalStats.size
      optimizedBytes += optimizedStats.size

      const reduction = (
        (1 - optimizedStats.size / originalStats.size) * 100
      ).toFixed(1)

      console.log(
        `✓ ${entry.name} → ${path.basename(outputPath)} ` +
        `(${reduction}% de réduction)`
      )
    } catch (error) {
      console.error(
        `Erreur sur ${entry.name}: ${error.message}`
      )
    }
  }
}

try {
  await optimizeDirectory(imagesDirectory)

  console.log('\n--- RÉSULTAT ---')
  console.log(`Images converties : ${optimizedCount}`)

  if (originalBytes > 0) {
    const reduction = (
      (1 - optimizedBytes / originalBytes) * 100
    ).toFixed(1)

    console.log(
      `Poids original : ${(originalBytes / 1024 / 1024).toFixed(2)} Mo`
    )

    console.log(
      `Poids WebP : ${(optimizedBytes / 1024 / 1024).toFixed(2)} Mo`
    )

    console.log(`Réduction globale : ${reduction}%`)
  }
} catch (error) {
  console.error('Optimisation impossible :', error)
  process.exitCode = 1
}
