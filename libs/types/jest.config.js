module.exports = {
  name: 'types',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/types',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
