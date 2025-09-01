import axios from 'axios'

const url = 'https://jeval.com.au/collections/hair-care/products.json?page=1'

export const FetchResults = async () => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (err) {
        throw new Error(err);
    }
}

export const answerKeywordMap = {
    1: {
        'Straight': ['straight'],
        'Curly': ['curly', 'curls', 'coil', 'curl'],
        'Wavy': ['waves', 'wavy'],
        'Fine': ['fine']
    },
    2: {
        'Daily': ['daily'],
        'Every other day': ['every other day'],
        'Twice a week': ['twice a week', 'biweekly'],
        'Once a week': ['once a week'],
        'Once every two weeks': ['every two weeks']
    },
    3: {
        'Anti-breakage': ['strength', 'strengthening'],
        'Hydration': ['hydration', 'hydrating', 'moisture'],
        'Soothing dry scalp': ['soothing', 'dry scalp', 'scalp care', 'dull'],
        'Repairs the appearance of damaged hair': ['repair', 'damaged hair', 'damage', 'dull', 'dry', 'repair', 'repairing'],
        'Volume': ['volume', 'thick', 'full', 'thickens'],
        'Curl and coil enhancing.': ['curl', 'coil', 'curl enhancing', 'curl definition', 'definition']
    },
    4: {
        'Breakage': ['breakage', 'split ends', 'strength', 'strengthens', 'repair', 'damaged hair'],
        'Frizz': ['frizz', 'frizzy'],
        'Scalp dryness': ['dry scalp', 'scalp care'],
        "Damage": ['damage', 'damaged', 'repair', 'strengthen', 'strengthens', 'strength', 'strengthening'],
        "Tangling": ['tangle', 'knot', 'tangled', 'detangling', 'detangle']
    },
    5: {
        'Black': ['black', 'natural hair'],
        'Brown': ['brown', 'natural hair', 'natural medium-brown', 'natural medium brown'],
        'Blonde': ['blonde', 'light', 'natural hair'],
        'Red/Orange': ['red', 'orange', 'auburn', 'natural hair', 'natural redheads', 'natural red heads'],
        'Silver/Grey': ['grey', 'silver', 'natural hair', 'natural grey hair']
    }
}

export const FilterResults = (allProducts, answers) => {
    const products = Object.values(allProducts)[0];
    let values = [];
    Object.entries(answers).forEach((answer, index) => {
        const current = answer[1];
        // find answer in keywords key
        const keywords = answerKeywordMap[index + 1]

        if (keywords === undefined) return;

        // get the values of keyword
        values.push(keywords[current]);
    })

    return products.filter(product => {
        const searchString = `${product.title} ${product.body_html} ${product.tags.join(' ')}.`.toLowerCase();
        // with values search product in search string 
        return values.some(valueArr => 
            valueArr.some(v => searchString.includes(v.toLowerCase()))
        )
    })
}

export const AttachWishList = (products) => {
    return products.map(p => ({ ...p, isWishList: false }))
}


