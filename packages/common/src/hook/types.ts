export interface HookEventPayload {
  runId: string;
}

export enum HookType {
  GITHUB_STATUS_HOOK = 'GITHUB_STATUS_HOOK',
  GENERIC_HOOK = 'GENERIC_HOOK',
  SLACK_HOOK = 'SLACK_HOOK',
  BITBUCKET_STATUS_HOOK = 'BITBUCKET_STATUS_HOOK',
}

export enum HookEvent {
  RUN_START = 'RUN_START',
  RUN_TIMEOUT = 'RUN_TIMEOUT',
  RUN_FINISH = 'RUN_FINISH',
  INSTANCE_START = 'INSTANCE_START',
  INSTANCE_FINISH = 'INSTANCE_FINISH',
}

export enum ResultFilter {
  ALL = 'ALL',
  ONLY_FAILED = 'ONLY_FAILED',
  ONLY_SUCCESSFUL = 'ONLY_SUCCESSFUL',
}

type BaseHook = {
  hookId: string;
  url: string;
};

export type SlackHook = BaseHook & {
  username?: string;
  hookEvents: HookEvent[];
  hookType: HookType.SLACK_HOOK;
  slackResultFilter: ResultFilter | null;
  slackBranchFilter?: string[];
};

export type GenericHook = BaseHook & {
  headers?: string;
  hookEvents: HookEvent[];
  hookType: HookType.GENERIC_HOOK;
};

export type GithubHook = BaseHook & {
  hookType: HookType.GITHUB_STATUS_HOOK;
  githubToken?: string;
  githubContext?: string;
};

export type BitBucketHook = BaseHook & {
  hookType: HookType.BITBUCKET_STATUS_HOOK;
  bitbucketUsername?: string;
  bitbucketToken?: string;
  bitbucketBuildName?: string;
};

export type HookWithCustomEvents = SlackHook | GenericHook;
export type Hook = SlackHook | GenericHook | GithubHook | BitBucketHook;
