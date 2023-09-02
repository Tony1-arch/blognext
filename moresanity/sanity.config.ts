import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'moresanity',

  projectId: 'z20fkgcg',
  dataset: 'production',

  plugins: [deskTool() ],

  schema: {
    types: schemaTypes,
  },
})
