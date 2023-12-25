import { Auth } from "@auth/core"
import GitHub from "@auth/core/providers/github"

const request = new Request(origin)
const response = await Auth(request, {
  providers: [GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })],
})
