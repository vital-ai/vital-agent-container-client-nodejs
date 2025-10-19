import { HaleyGroupMappingAction } from './haleyGroupMappingAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupGenerativeMappingAction
 */
export class HaleyGroupGenerativeMappingAction extends HaleyGroupMappingAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroupGenerativeMappingAction';
  }

  /**
   * Get property definitions for HaleyGroupGenerativeMappingAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
