import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindPlanActionInstance
 */
export class HaleyMindPlanActionInstance extends VITAL_Node {
  public haleyMindPlanAction?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindPlanActionInstance';
  }

  /**
   * Get property definitions for HaleyMindPlanActionInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindPlanAction',
        tsPropertyName: 'haleyMindPlanAction',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
