import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDayOfWeekType
 */
export class HaleyDayOfWeekType extends VITAL_Node {
  public weekendDay?: boolean;
  public dayOfWeekOrder?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDayOfWeekType';
  }

  /**
   * Get property definitions for HaleyDayOfWeekType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isWeekendDay',
        tsPropertyName: 'weekendDay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDayOfWeekOrder',
        tsPropertyName: 'dayOfWeekOrder',
        type: 'number',
        required: false
      }
    ];
  }


}
