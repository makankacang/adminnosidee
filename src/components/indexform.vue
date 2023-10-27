<template>
    <hr class="my-4">

    <div class="row justify-content-center">
        <button type="button" class="btn btn-success col-11" @click="deleteIndexForm">Delete index</button>
        </div>
        <form>
            <div class="row mb-3 align-item-center">
              <div class="col-md-4">
                <label for="indexTitleInput" class="form-label">Title:</label>
                <input type="text" class="form-control" id="indexTitleInput" name="title" required>
              </div>
              <div class="col-md-4">
                <label for="indexImageInput" class="form-label">Image:</label>
                <input type="file" class="form-control" id="indexImageInput" @change="previewindexImage" required>
              </div>
              <div class="col-md-4">
                <label for="indexImageInput" class="form-label">Preview:</label>
                <div class="image-upload-index">
                  <img :src="indeximagePreview" alt="Image Preview" class="img-preview" v-if="indeximagePreview" style="width: 60%;">
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-secondary btn-sm">Save Index</button>
            </div>
        </form>

      

       
        
        
  </template>
  
  <script>
  export default {
    props: ['indexing'], // Index of the article form
    // Your component logic here
    data() {
  return {
     indeximagePreview: null,
  };
},

  methods: {
    deleteIndexForm() {
      // Emit a custom event to notify the parent component
      this.$emit('delete', this.index);
    },
  
        previewindexImage(event) {
        const input = event.target;
        const file = input.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = (e) => {
            // Set the preview image source to the data URL
            this.indeximagePreview = e.target.result; // Change to indeximagePreview
          };

          reader.readAsDataURL(file);
        }
      },

  }


}
  </script>
  
  <style scoped>
  /* Your component styles here */
  </style>
  
  