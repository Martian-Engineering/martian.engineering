+++
sort_index = 0
short_name = "NEAR"
full_name = "NEAR FOUNDATION"
project = "Proof of Response Protocol"
brief = "Data pipeline architecture & ML infrastructure"
logo = "/client-logos/near-foundation-white.svg"
website = "https://near.foundation/"
duration = "8 months"
technologies = ["Rust", "Terraform"]
resources = ["https://near.ai/blog/proof-of-response-announcement","https://arxiv.org/html/2502.10637v1"]
+++

The Proof of Response protocol (PoR) is intended to provide a trustless incentivization and observability of network availability. It consists of a peer-to-peer network of PoR nodes, which communicate with each other using the PoR protocol. These nodes also interact with a smart contract on the NEAR blockchain that manages state channels that represent each connection between a pair of PoR nodes.

PoR is a TCP-based request-response protocol. A client node can send a request through a series of relay nodes to a server node, and the response will take the same path through the network in the opposite direction. The client sends a payment with each request, expressed as a singly signed state channel update, where the sender’s balance has been debited by the request cost and moved to the receiver’s balance. The receiver sends a counter-signed state channel as an acknowledgment.

Martian Engineering works closely with NEAR cofounder Alex Skidanov on this project, which is a nine-month engagement targeting a production-worthy protocol implementation in Rust, along with an SDK and documentation. Martian has an end-to-end protocol running (PoR nodes connected to each other and to NEAR nodes running the smart contract), with  a suite of end-to-end tests that confirm the system’s behavior in a number of different scenarios.

On the protocol implementation side, this has entailed developing route finding, TCP message framing, heartbeats, in-band late payments, response authentication, and API development to allow applications to use PoR (as both clients and servers). The smart contract includes logic for channel opening with confirmation, channel closing with confirmation, adversarial channel closing, partition checking, and reimbursements.

Martian has also built a file sharing protocol that layers on top of PoR (analogously to how HTTP layers over TCP). We will soon be running that on a testnet that sends traffic over the internet to prove out the network performance and economic dynamics in a real-world use case.
