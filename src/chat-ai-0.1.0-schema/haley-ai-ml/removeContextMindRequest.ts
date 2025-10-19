import { HaleyMindRequest } from '../haley/haleyMindRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#RemoveContextMindRequest
 */
export class RemoveContextMindRequest extends HaleyMindRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#RemoveContextMindRequest';
  }

  /**
   * Get property definitions for RemoveContextMindRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
