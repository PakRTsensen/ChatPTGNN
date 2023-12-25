import { Auth } from "@auth/core"
import GitHub from "@auth/core/providers/github"

export { GET, POST } from '@/auth'
export const runtime = 'edge'

const request = new Request(origin)
const response = await Auth(request, {
  providers: [GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })],
})
