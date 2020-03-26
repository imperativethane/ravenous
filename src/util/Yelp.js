const apiKey = 'VC9sFTwZEtyquOpNyOV_JzZS3lpbSAfQn8wK0XWjvi_yeO2jVdBnhfE-yrKUAL_hE5KD_j08TdafPw05Qa-NvRJQ8Ht9RieVKd8F0rvEi6_4KT1S9G9qe2kAn-Z8XnYx';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
             {
                 headers: {
                     Authorization: `Bearer ${apiKey}`
                 }
             })
             .then(response => {
                 return response.json()
             })
             .then(jsonResponse => {
                 if (jsonResponse.businesses) {
                     return jsonResponse.businesses.map(business => {
                         return {
                             id: business.id,
                             imageSrc: business.image_url,
                             name: business.name,
                             address: business.location.address1,
                             city: business.location.city,
                             state: business.location.state,
                             zipCode: business.location.zip_code,
                             category: business.categories.title,
                             rating: business.rating,
                             reviewCount: business.review_count
                            }
                     })
                 }
             })
    }
}