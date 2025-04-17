import { pageType } from './pageType'

// Component imports
import { buttonComponent } from './components/buttonComponent'

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
]