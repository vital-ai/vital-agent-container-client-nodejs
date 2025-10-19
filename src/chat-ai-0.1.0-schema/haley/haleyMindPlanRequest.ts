import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindPlanRequest
 */
export class HaleyMindPlanRequest extends VITAL_Node {
  public haleyMindPlanRequestTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindPlanRequest';
  }

  /**
   * Get property definitions for HaleyMindPlanRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindPlanRequestTypeURI',
        tsPropertyName: 'haleyMindPlanRequestTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
