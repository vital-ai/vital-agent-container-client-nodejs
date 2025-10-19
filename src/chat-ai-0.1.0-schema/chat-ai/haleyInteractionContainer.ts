import { HaleyContainer } from '../haley-ai-question/haleyContainer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyInteractionContainer
 */
export class HaleyInteractionContainer extends HaleyContainer {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyInteractionContainer';
  }

  /**
   * Get property definitions for HaleyInteractionContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
