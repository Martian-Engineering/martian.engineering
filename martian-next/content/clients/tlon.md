+++
sort_index = 20
short_name = "TLON"
full_name = "TLON"
project = "Zenith Urbit Integration & Janus"
brief = "Connecting Urbit software to the Zenith blockchain"
logo = "/client-logos/tlon.svg"
website = "https://tlon.io"
duration = "3 months"
technologies = ["Hoon", "Urbit", "Go", "Cosmos SDK", "HTTP"]
+++

Tlon asked us to make Zenith, the Ethereum layer-2 that manages Urbit identities, feel native inside Urbit. Working alongside Laconic Network, we produced an installable Urbit software bundle (a "desk" in Urbit terminology) that lets ships configure Zenith connections, check balances, send transactions, and subscribe to updates from Zenith's on-chain data feed without leaving the Urbit environment.

We added a verification service so other Urbit apps can request data from remote ships—a pattern the community calls "remote scry"—and automatically compare the response with the authenticated version stored on Zenith before handing it back to the requester.

To move activity from Urbit into the chain, we engineered Janus: a Go service that each validating galaxy and star runs as a reliable relay. Janus accepts transaction and data submissions from its sponsored ships, bundles and signs them, and forwards them up the hierarchy until they reach a Zenith validator.

We finished the engagement with documentation, handoff sessions, and end-to-end testing that proved Urbit ships can push updates through Janus into Zenith even when network links drop or faulty payloads show up.
