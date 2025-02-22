import fs from 'fs'
import path from 'path'

interface PackageJson {
	scripts?: Record<string, string>
}

function validateMonorepo(): void {
	const errors: string[] = []

	// Rest of the code remains the same, just with proper types
	// ...

	// Check package.json files
	const packageJsonFiles = [
		'package.json',
		'backend/container/package.json',
		'frontend/vue/package.json',
		'frontend/react/package.json',
	]

	packageJsonFiles.forEach((file) => {
		if (!fs.existsSync(path.join(process.cwd(), file))) {
			errors.push(`Missing package.json: ${file}`)
			return
		}

		const pkg = require(path.join(process.cwd(), file)) as PackageJson

		// Check for required scripts
		const requiredScripts = ['dev', 'build', 'lint', 'type-check']
		requiredScripts.forEach((script) => {
			if (!pkg.scripts || !pkg.scripts[script]) {
				errors.push(`Missing required script '${script}' in ${file}`)
			}
		})
	})

	// Rest of the code remains the same
	// ...
}

validateMonorepo() 