import { Document } from '../vital-nlp/document';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInMessage
 */
export class LinkedInMessage extends Document {
  public linkedInJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#LinkedInMessage';
  }

  /**
   * Get property definitions for LinkedInMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInJSON',
        tsPropertyName: 'linkedInJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
