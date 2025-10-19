import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRatingSummary
 */
export class KGRatingSummary extends KGNode {
  public kGRatingSummaryAverageRatingDouble?: number;
  public kGRatingSummaryType?: string;
  public kGRatingSummaryPositiveCount?: number;
  public kGRatingSummaryTitle?: string;
  public kGRatingSummaryTotalCount?: number;
  public kGRatingCalculationDateTime?: string | Date;
  public kGRatingSummaryNegativeCount?: number;
  public kGRatingSummaryAverageStarRating?: number;
  public kGRatingSummaryText?: string;
  public kGRatingSummaryNeutralCount?: number;
  public kGRatingValueTypeURI?: string;
  public kGRatingSummaryReviewCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRatingSummary';
  }

  /**
   * Get property definitions for KGRatingSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageRatingDouble',
        tsPropertyName: 'kGRatingSummaryAverageRatingDouble',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryType',
        tsPropertyName: 'kGRatingSummaryType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryPositiveCount',
        tsPropertyName: 'kGRatingSummaryPositiveCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTitle',
        tsPropertyName: 'kGRatingSummaryTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryTotalCount',
        tsPropertyName: 'kGRatingSummaryTotalCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingCalculationDateTime',
        tsPropertyName: 'kGRatingCalculationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNegativeCount',
        tsPropertyName: 'kGRatingSummaryNegativeCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryAverageStarRating',
        tsPropertyName: 'kGRatingSummaryAverageStarRating',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryText',
        tsPropertyName: 'kGRatingSummaryText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryNeutralCount',
        tsPropertyName: 'kGRatingSummaryNeutralCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingValueTypeURI',
        tsPropertyName: 'kGRatingValueTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRatingSummaryReviewCount',
        tsPropertyName: 'kGRatingSummaryReviewCount',
        type: 'number',
        required: false
      }
    ];
  }


}
