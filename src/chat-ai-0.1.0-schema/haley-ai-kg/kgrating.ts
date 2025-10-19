import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRating
 */
export class KGRating extends KGNode {
  public kGRatingDateTime?: string | Date;
  public kGRatingStarValue?: number;
  public kGRatingDescription?: string;
  public kGRatingValueDouble?: number;
  public kGRatingType?: string;
  public kGRatingValueTypeURI?: string;
  public kGRatingSourceURI?: string;
  public kGRatingValueURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRating';
  }

  /**
   * Get property definitions for KGRating
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingDateTime',
        tsPropertyName: 'kGRatingDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingStarValue',
        tsPropertyName: 'kGRatingStarValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingDescription',
        tsPropertyName: 'kGRatingDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueDouble',
        tsPropertyName: 'kGRatingValueDouble',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingType',
        tsPropertyName: 'kGRatingType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueTypeURI',
        tsPropertyName: 'kGRatingValueTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSourceURI',
        tsPropertyName: 'kGRatingSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueURI',
        tsPropertyName: 'kGRatingValueURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
