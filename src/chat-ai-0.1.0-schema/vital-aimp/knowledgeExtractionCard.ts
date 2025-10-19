import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#KnowledgeExtractionCard
 */
export class KnowledgeExtractionCard extends Card {
  public knowledgeExtractionJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#KnowledgeExtractionCard';
  }

  /**
   * Get property definitions for KnowledgeExtractionCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasKnowledgeExtractionJSON',
        tsPropertyName: 'knowledgeExtractionJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
