+++
sort_index = 5
short_name = "SWEETSPOT: MCP"
full_name = "SWEETSPOT"
project = "MCP as Infrastructure"
logo = "/client-logos/sweetspot.svg"
website = "https://sweetspot.so"
duration = "5 months"
technologies = ["Model Context Protocol", "Python", "Pydantic AI", "Hatchet", "AWS KMS", "AWS EKS", "Google Workspace API", "Microsoft Graph API", "Next.js", "React", "TypeScript", "FastAPI", "Terraform"]
+++

Sweetspot provides a sophisticated agent in their platform for their customers. They wanted a flexible way to give their agent new capabilities to integrate with their customer's existing software systems. They hired Martian Engineering to build a system that allows them to leverage the Model Context Protocol (MCP) to provide these capabilities. MCP makes sense as an architectural choice to provide agents with external capabilities due to its widespread and growing adoption.

This system involved many challenges across a wide range of technologies:

We built Custom MCP servers for  **Microsoft Connect** and **Google Workspace** to provide state-of-the-art document and presentation editing capabilities. Due to limitations of MCP's OAuth support, we also built a custom proxy service to bridge the gap between MCP's dynamic client registration requirement and enterprise SaaS' lack of support for this feature.

We built upon our prior work with USASpending to expose federal award data via MCP for agentic research and analysis. We also built the infrastructure to deploy these servers in Sweetspot's cloud on AWS Elastic Kubernetes Service (EKS).

This system involves handling sensitive information, so we followed security best practices using AWS Key Management Service to keep customer secrets secure with Data Encryption Keys (DEKs), providing encryption at rest.

Martian Engineering owned the entire system from end to end, including the product design and UX engineering required to bring these capabilities into production.
