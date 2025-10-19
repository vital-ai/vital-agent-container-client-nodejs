import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMonthOfYearType
 */
export class HaleyMonthOfYearType extends VITAL_Node {
  public monthOfYearOrder?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyMonthOfYearType';
  }

  /**
   * Get property definitions for HaleyMonthOfYearType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMonthOfYearOrder',
        tsPropertyName: 'monthOfYearOrder',
        type: 'number',
        required: false
      }
    ];
  }


}
