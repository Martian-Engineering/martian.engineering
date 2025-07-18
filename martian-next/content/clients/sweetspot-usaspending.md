+++
sort_index = 2
short_name = "SWEETSPOT"
full_name = "SWEETSPOT"
project = "USASpending Data Pipeline"
logo = "/client-logos/sweetspot.svg"
website = "https://sweetspot.so"
duration = "6 months"
technologies = ["Python", "Pydantic", "Clickhouse", "PostgreSQL", "AWS RDS", "Turbopuffer"]
+++

We designed, built and deployed an ETL pipeline that pulls 20 years of federal spending data from https://usaspending.gov into an on-prem RDS instance within Sweetspot's cloud, enriching their government contract data with historical awards.

We built the pipeline using [Dagster](https://dagster.io), which pulls batches of transactions on a daily basis into RDS. We reverse-engineered the USASpending API to add and update existing awards, replicating USASpending's internal process for ingesting government payments and synthesizing them into "awards" for public consumption.

Notably, all award content is indexed in Turbopuffer for semantic querying, and queried via Clickhouse due to the massive amount of data (2.5 TB).