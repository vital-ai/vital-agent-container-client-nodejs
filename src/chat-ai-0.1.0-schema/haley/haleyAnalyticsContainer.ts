import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAnalyticsContainer
 */
export class HaleyAnalyticsContainer extends VITAL_Node {
  public analyticsWindowSizeURI?: string;
  public analyticsDataJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAnalyticsContainer';
  }

  /**
   * Get property definitions for HaleyAnalyticsContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnalyticsWindowSizeURI',
        tsPropertyName: 'analyticsWindowSizeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnalyticsDataJSON',
        tsPropertyName: 'analyticsDataJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
