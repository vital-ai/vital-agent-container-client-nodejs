import { Document } from '../vital-nlp/document';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ReviewSummary
 */
export class ReviewSummary extends Document {
  public totalReviews?: number;
  public averageRating?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ReviewSummary';
  }

  /**
   * Get property definitions for ReviewSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTotalReviews',
        tsPropertyName: 'totalReviews',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAverageRating',
        tsPropertyName: 'averageRating',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
