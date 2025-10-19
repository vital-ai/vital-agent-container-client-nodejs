import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySection
 */
export class HaleySection extends VITAL_Node {
  public sectionIndex?: number;
  public skipEmptyRows?: boolean;
  public skipEmptyQuestions?: boolean;
  public hiddenInGroupDisplay?: boolean;
  public includedWhenEmpty?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleySection';
  }

  /**
   * Get property definitions for HaleySection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSectionIndex',
        tsPropertyName: 'sectionIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSkipEmptyRows',
        tsPropertyName: 'skipEmptyRows',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSkipEmptyQuestions',
        tsPropertyName: 'skipEmptyQuestions',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay',
        tsPropertyName: 'hiddenInGroupDisplay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isIncludedWhenEmpty',
        tsPropertyName: 'includedWhenEmpty',
        type: 'boolean',
        required: false
      }
    ];
  }


}
