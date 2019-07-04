module.exports = {
  pages: {
    home: {
      entry: 'src/pages/home/main.ts',
      template: 'public/index.html',
      title: 'Tools.Travel',
      chunks: ['chunk-vendors', 'chunks-common', 'home'],
    },
    admin: {
      entry: 'src/pages/admin/main.ts',
      template: 'public/index.html',
      title: 'Admin Dashboard',
      chunks: ['chunk-vendors', 'chunks-common', 'admin'],
    },
  },
};
