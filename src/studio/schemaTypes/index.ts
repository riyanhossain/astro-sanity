import { pageType } from './pageType'

// Component imports
import { buttonComponent } from './components/buttonComponent'
import imageComponent from './components/imageComponet'
import spacerComponent from './components/spacerComponent'

// Section imports
import { heroSection } from './sections/heroSection'
import { textSection } from './sections/textSection'

export const schemaTypes = [
  // Documents
  pageType,
  
  // Sections
  heroSection,
  textSection,
  
  // Components
  buttonComponent,
  imageComponent,
  spacerComponent,
]