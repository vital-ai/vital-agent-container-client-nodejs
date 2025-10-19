import { Comment } from './comment';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Review
 */
export class Review extends Comment {
  public rating?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Review';
  }

  /**
   * Get property definitions for Review
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRating',
        tsPropertyName: 'rating',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
