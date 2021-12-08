const app = require('express');
const router = app.Router();
const rootSchema = require('../app');
const { graphql } = require('graphql');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json()

const query = (q, vars) => {
    const req = vars;
    return graphql(rootSchema, q, null, req)
}

const transform = (result) => {
    const recipe = result.data.recipeList;
    return {
        data: {
            type: 'recipeList',
            recipeList: recipe
        }
    }
}

const transformInfo = (result) => {
    const recipe = result.data.recipeInfo;
    return {
        data: {
            type: 'recipeInfo',
            recipeInfo: recipe
        }
    }
}

const transformTags = (result) => {
    const tags = result.data.allTags;
    return {
        data: {
            type: 'allTags',
            allTags: tags
        }
    }
}

router.get('/info/:id', (req, res) => {
    const { id } = req.params
    const vars = { id }
    
    console.log("id",req.params)
    const q = ` query{
                    recipeInfo{
                        id,
                        name, 
                        instructions{
                            id, 
                            position, 
                            display_text
                        }, 
                        thumbnail_url, 
                        tags{
                            id, 
                            type, 
                            name, 
                            display_name
                        }, 
                        yields, 
                        created_at, 
                        updated_at
                    }
                }`
    query(q, vars)
        .then(result => {
            const transformed = transformInfo(result)
            res.send(transformed)
        })
        .catch(err => {
            res.sendStatus(500)
        })
})

router.get('/tags', (req, res) => {
    const q = ` query{ 
                    allTags{
                        id, 
                        type, 
                        name, 
                        display_name
                    }
                }`
    query(q)
        .then(result => {
            const transformed = transformTags(result)
            res.send(transformed)
        })
        .catch(err => {
            res.sendStatus(500)
        })
})

router.post('/search', jsonParser, (req, res) => {
    const { from, size, q, tags } = req.body.body
    console.log("body",req.body)
    const vars = {
        from,
        size,
        q,
        tags
    }
    const qq = ` query{
                    recipeList{
                        id,
                        name,
                        thumbnail_url, 
                        tags{
                            id, 
                            type, 
                            name, 
                            display_name
                        },
                        created_at, 
                        updated_at
                    }
                }`
    query(qq, vars)
        .then(result => {
            const transformed = transform(result)
            res.send(transformed)
        })
        .catch(err => {
            res.sendStatus(500)
        })
})

router.post('/', jsonParser, (req, res) => {
    const { from, size } = req.body
    const vars = {
        from,
        size
    }
    const q = ` query{
                    recipeList{
                        id,
                        name,
                        thumbnail_url, 
                        tags{
                            id, 
                            type, 
                            name, 
                            display_name
                        },
                        created_at, 
                        updated_at
                    }
                }`
    query(q, vars)
        .then(result => {
            const transformed = transform(result)
            res.send(transformed)
        })
        .catch(err => {
            res.sendStatus(500)
        })
})

module.exports = router;