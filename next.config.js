const withSass = typeof window === 'object' ? require('react-quill') : () => false;
module.exports = withSass({ })