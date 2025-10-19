import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessOfficeRole
 */
export class HaleyAccessOfficeRole extends VITAL_Node {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessOfficeRole';
  }

  /**
   * Get property definitions for HaleyAccessOfficeRole
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
