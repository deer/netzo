// @netzo/api: hard-coded to avoid esm.sh tree-shaking issues

export * from './api.netzo.types.ts'

export interface Paginated<T> {
  total: number
  limit: number
  skip: number
  data: T[]
}

// export interface Deployment {
//   id: string
//   url: string
//   domainMappings: {
//     domain: string
//     createdAt: string
//     updatedAt: string
//   }[]
//   project?: Project
//   projectId: string
//   createdAt: string
//   updatedAt: string
//   envVars: string[]
// }

// export interface Project {
//   id: string
//   name: string
//   productionDeployment?: Deployment | null
//   hasProductionDeployment: boolean
//   organizationId: string
//   createdAt: string
//   updatedAt: string
//   envVars: string[]
// }

// export interface DeploymentsSummary {
//   page: number
//   count: number
//   limit: number
//   totalCount: number
//   totalPages: number
// }

// manifest:

export interface ManifestEntryFile {
  kind: 'file'
  gitSha1: string
  size: number
}

export interface ManifestEntryDirectory {
  kind: 'directory'
  entries: Record<string, ManifestEntry>
}

export interface ManifestEntrySymlink {
  kind: 'symlink'
  target: string
}

export type ManifestEntry =
  | ManifestEntryFile
  | ManifestEntryDirectory
  | ManifestEntrySymlink

// deployment-request:

export interface PushDeploymentRequest {
  url: string
  importMapUrl: string | null
  production: boolean
  manifest?: { entries: Record<string, ManifestEntry> }
}

export interface GitHubActionsDeploymentRequest {
  url: string
  importMapUrl: string | null
  manifest: { entries: Record<string, ManifestEntry> }
  event?: unknown
}

// deployment-progress:

export type DeploymentProgress =
  | DeploymentProgressStaticFile
  | DeploymentProgressLoad
  | DeploymentProgressUploadComplete
  | DeploymentProgressSuccess
  | DeploymentProgressError

export interface DeploymentProgressStaticFile {
  type: 'staticFile'
  currentBytes: number
  totalBytes: number
}

export interface DeploymentProgressLoad {
  type: 'load'
  url: string
  seen: number
  total: number
}

export interface DeploymentProgressUploadComplete {
  type: 'uploadComplete'
}

export interface DeploymentProgressSuccess extends Deployment {
  type: 'success'
}

export interface DeploymentProgressError {
  type: 'error'
  code: string
  ctx: string
}

// logs:

export interface LogReady {
  type: 'ready'
}

export interface LogPing {
  type: 'ping'
}

export interface LogMessage {
  type: 'message'
  time: string
  message: string
  level: 'debug' | 'info' | 'warning' | 'error'
  region: string
}

export type Logs =
  | LogReady
  | LogPing
  | LogMessage