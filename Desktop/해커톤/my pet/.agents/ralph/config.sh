# Ralph config for PetMedical.AI
# All paths are relative to repo root unless absolute.

# PRD 및 상태 파일 경로
PRD_PATH=".agents/tasks/prd-petmedical.json"
PROGRESS_PATH=".ralph/progress.md"
GUARDRAILS_PATH=".ralph/guardrails.md"
ERRORS_LOG_PATH=".ralph/errors.log"
ACTIVITY_LOG_PATH=".ralph/activity.log"
TMP_DIR=".ralph/.tmp"
RUNS_DIR=".ralph/runs"

# 참조 파일
GUARDRAILS_REF=".agents/ralph/references/GUARDRAILS.md"
CONTEXT_REF=".agents/ralph/references/CONTEXT_ENGINEERING.md"
ACTIVITY_CMD=".agents/ralph/log-activity.sh"

# Claude를 기본 에이전트로 사용
AGENT_CMD="claude -p --dangerously-skip-permissions \"\$(cat {prompt})\""

# 기타 설정
PROMPT_BUILD=".agents/ralph/PROMPT_build.md"
NO_COMMIT=false
MAX_ITERATIONS=25
STALE_SECONDS=0
