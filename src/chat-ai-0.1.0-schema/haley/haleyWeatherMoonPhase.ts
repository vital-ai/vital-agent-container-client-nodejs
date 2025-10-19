import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyWeatherMoonPhase
 */
export class HaleyWeatherMoonPhase extends VITAL_Node {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyWeatherMoonPhase';
  }

  /**
   * Get property definitions for HaleyWeatherMoonPhase
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
