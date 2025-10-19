import { Document } from '../vital-nlp/document';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Comment
 */
export class Comment extends Document {
  public author?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Comment';
  }

  /**
   * Get property definitions for Comment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAuthor',
        tsPropertyName: 'author',
        type: 'string',
        required: false
      }
    ];
  }


}
