+++
sort_index = 40
short_name = "EXTEND"
full_name = "EXTEND"
project = "PgBouncer implementation"
brief = "Stabilizing Postgres under surging API traffic"
logo = "/client-logos/extend.svg"
website = "https://extend.ai/"
duration = "6 weeks"
technologies = ["PgBouncer", "PostgreSQL", "AWS RDS", "AWS ECS", "Terraform", "Datadog"]
+++

Extend called us in after back-to-back May 2025 incidents where customer-facing API calls jumped from seconds to minutes even though their Postgres database still had headroom. We traced the slowdowns to thousands of application connections piling onto the same AWS RDS instance whenever traffic spiked, creating more work for the database than the requests themselves.

We designed and rolled out PgBouncer so every service talks through a shared, lightweight pool instead of opening its own Postgres sessions. That included readiness reviews with the team, staging rollouts and tuning, and new Datadog dashboards that make it obvious when connection pressure starts to climb.
