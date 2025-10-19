import { VITAL_HyperNode } from '../vital-core/vitalHypernode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BaseInteraction
 */
export class BaseInteraction extends VITAL_HyperNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BaseInteraction';
  }

  /**
   * Get property definitions for BaseInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
