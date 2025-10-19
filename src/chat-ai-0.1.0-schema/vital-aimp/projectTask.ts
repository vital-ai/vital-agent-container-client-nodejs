import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ProjectTask
 */
export class ProjectTask extends AIMPThing {
  public projectTag?: string[];
  public pecrentComplete?: number;
  public shortDescription?: string;
  public priority?: number;
  public dueDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ProjectTask';
  }

  /**
   * Get property definitions for ProjectTask
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProjectTag',
        tsPropertyName: 'projectTag',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPecrentComplete',
        tsPropertyName: 'pecrentComplete',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPriority',
        tsPropertyName: 'priority',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDueDate',
        tsPropertyName: 'dueDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
