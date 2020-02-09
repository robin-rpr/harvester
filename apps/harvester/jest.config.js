module.exports = {
  name: 'harvester',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/harvester',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
