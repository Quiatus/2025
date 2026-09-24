import { Blog } from '../models/blog.js'

export const blog_index = async (req, res) => {
  try {
    const result = await Blog.find().sort({ createdAt: -1 })
    res.render('index', { title: 'All blogs', blogs: result })
  } catch (err) {
    console.log(err)
  }
}

export const blog_details = async (req, res) => {
  const id = req.params.id
  try {
    const result = await Blog.findById(id)
    res.render('details', { blog: result, title: result.title })
  } catch (err) {
    console.log(err)
  }
}

export const blog_create_get = (req, res) => res.render('create', { title: 'Create a new blog' });

export const blog_create_post = async (req, res) => {
  const blog = new Blog(req.body)

  try {
    await blog.save()
    res.redirect('/blogs')
  } catch (err) {
    console.log(err)
  }
}

export const blog_delete = async (req, res) => {
  const id = req.params.id

  try {
    await Blog.findByIdAndDelete(id)
    res.json({ redirect: '/blogs' })
  } catch (err) {
    console.log(err)
  }
}