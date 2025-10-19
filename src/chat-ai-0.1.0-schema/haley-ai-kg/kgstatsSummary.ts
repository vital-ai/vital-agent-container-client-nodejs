import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGStatsSummary
 */
export class KGStatsSummary extends KGNode {
  public kGStatsSummaryPeriodDay?: number;
  public kGStatsSummaryCountPercentage?: number;
  public kGStatsSummaryPeriodYear?: number;
  public kGStatsSummaryPeriodMonth?: number;
  public kGStatsSummaryCount?: number;
  public kGStatsSummaryPeriod?: string | Date;
  public kGStatsSummaryType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGStatsSummary';
  }

  /**
   * Get property definitions for KGStatsSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodDay',
        tsPropertyName: 'kGStatsSummaryPeriodDay',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCountPercentage',
        tsPropertyName: 'kGStatsSummaryCountPercentage',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodYear',
        tsPropertyName: 'kGStatsSummaryPeriodYear',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriodMonth',
        tsPropertyName: 'kGStatsSummaryPeriodMonth',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryCount',
        tsPropertyName: 'kGStatsSummaryCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryPeriod',
        tsPropertyName: 'kGStatsSummaryPeriod',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGStatsSummaryType',
        tsPropertyName: 'kGStatsSummaryType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
