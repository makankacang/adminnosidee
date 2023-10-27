<template>
    <hr class="my-4">

    <div class="row justify-content-center">
        <button type="button" class="btn btn-success col-11" @click="deleteArticleForm">Delete Article</button>
        </div>
    <div class="row mb-3">

      

       
        
        <form id="articleForm">
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="imageInput" class="form-label">Image</label>
                    <input type="file" class="form-control" id="imageInput" name="image" required>
                </div>
                <div class="col-md-6">
                    <label for="judulInput" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="judulInput" name="title" required>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="authorInput" class="form-label">Author:</label>
                    <input type="text" class="form-control" id="authorInput" name="author" required>
                </div>
                <div class="col-md-6">
                    <label for="tanggalInput" class="form-label">Date:</label>
                    <input type="date" class="form-control" id="tanggalInput" name="date" required>
                </div>
            </div>
            <div class="mb-3">
                <label for="deskripsiInput" class="form-label">Description:</label>
                <textarea class="form-control" id="deskripsiInput" name="description" rows="3" required></textarea>
            </div>
            <div class="mb-3">
                <label for="linkInput" class="form-label">Article Link:</label>
                <input type="url" class="form-control" id="linkInput" name="link" required>
            </div>
            
            <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-secondary">Add Article</button>
            </div>
        </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['index'], // Index of the article form
    // Your component logic here
    
    methods: {
    deleteArticleForm() {
      // Emit a custom event to notify the parent component
      this.$emit('delete', this.index);
    }
  }
  }
  </script>
  
  <style scoped>
  /* Your component styles here */
  </style>
  
  