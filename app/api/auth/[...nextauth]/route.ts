import { Auth } from "@auth/core"
import GitHub from "@auth/core/providers/github"

const request = new Request(origin)
const response = await Auth(request, {
  providers: [GitHub({ clientId: 936c43ba2cb38edae571, clientSecret: 82a6ce4085a29fa30374bee0c30975515b03e46a })],
})
