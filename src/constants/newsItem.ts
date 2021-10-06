/* eslint-disable max-len */
export interface INewsArticle {
  source:      Source;
  author:      string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  string;
  publishedAt: Date;
  content:     string;
}

export interface Source {
  id:   string;
  name: string;
}

const testData = `[
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "9Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "8Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "7Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "6Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "5Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "4Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "3Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "2Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Electrek"
    },
    "author": "Blair Altland",
    "title": "1Score three Greenworks electric 40V outdoor tools for $298 in New Green Deals, more",
    "description": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other electric lawn mowers and much more below, as well. We also ha…",
    "url": "https://electrek.co/2021/10/05/greenworks-40v-bundle-deal/",
    "urlToImage": "https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/10/greenworks-40v-bundle.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2021-10-05T18:00:04Z",
    "content": "Get ready to tackle yard work next spring by refreshing your electric tool arsenal ahead of time. This 3-tool package from Greenworks includes all the essentials and is joined by discounts on other e… [+5292 chars]"
  }
]`

// const l = testData.replace(/\\"/g,"'")

// console.log(l)

export const testArray:INewsArticle[] = JSON.parse(testData)