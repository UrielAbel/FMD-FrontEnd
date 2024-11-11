const getPost = async (uri, serialize) => {
    let raw, frontMatter, serialized;
    let post = await fetch(`https://api.feymind.com/articulo/${uri}`, {next: {revalidate: 3600}}).then(data => data.json())

    try {
        await fetch(post.CDNurl, {next: {revalidate: 3600}})
        .then(data => data.text())
        .then(data => raw = data)
    
        serialized = await serialize(raw, {
            parseFrontmatter: true
        });
    
        frontMatter = serialized.frontmatter;
    } catch (error) {
        console.log(error)
    }

    return {
        serialized,
        frontMatter
    }
}

module.exports = {
    getPost
}