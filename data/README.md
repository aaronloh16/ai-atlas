# Data

Raw evidence used to back the [reports](../reports/).

## sentiment-claims.csv

Social-media claims about AI dev tools, collected to spot adoption trends and failure modes.

### Schema

| Column | Description |
|---|---|
| `tool` | Tool or product the claim is about |
| `source_url` | Original post URL (usually X/Twitter) |
| `author` | Handle of the original poster |
| `date` | Date the claim was posted (YYYY-MM-DD) |
| `claim` | One-sentence summary of what was said |
| `claim_type` | Category — `sentiment`, `switch_story`, `workflow_note`, `failure_mode`, `security_claim`, `product_update`, `procurement_or_adoption` |
| `confidence` | How much we trust this claim — `Low`, `Medium`, `High` |
| `verified` | `true` if the source URL was successfully fetched and the claim checked, `false` otherwise |
| `notes` | Extra context, including fetch errors |

### Important caveats

- **All current entries have `confidence: Low` and `verified: false`.** The source URLs (X/Twitter) returned HTTP 403 when fetched via unauthenticated CLI on 2026-03-06. The claims are included as candidate evidence only — they have not been independently verified.
- Claims are summarized, not quoted. The `claim` column is an editorial summary, not a direct quote.
- This is a small, manually curated sample, not a comprehensive survey.

### Adding a claim

1. Add a row to the CSV following the schema above.
2. Try to verify the source URL — set `verified: true` only if you can confirm the claim matches the source.
3. Set `confidence` based on how trustworthy the source and claim are.
