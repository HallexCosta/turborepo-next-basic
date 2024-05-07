import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
console.log({ projectDir })
console.log(loadEnvConfig(projectDir))
