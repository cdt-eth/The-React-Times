# Go News Aggregator

#### Program that uses Go to perform GET requests to The Washington Post's sitemap xml URLs and aggregates the news from it.

## What I learned:
- HTTP Requests in Go
- Unmarshalling response data
- HTML Templating
- Proper Go commenting
- Concurrency with Goroutines
- Performance boosting with parallelism


## Adding concurrency:
### Before: 116,621ms
<img width="1440" alt="3" src="https://user-images.githubusercontent.com/26611339/107683373-7a107280-6c6f-11eb-9841-aa9430f1203c.png">

<br/>

### After: 12,060ms (+89% increase)
<img width="1439" alt="4" src="https://user-images.githubusercontent.com/26611339/107683578-b9d75a00-6c6f-11eb-8333-7f0fc1c5cfbe.png">


